import pandas as pd
from sklearn import tree, preprocessing
from sklearn.metrics import accuracy_score
import graphviz

train_df = pd.read_csv('./api-server/factory/train_list.csv')
test_df = pd.read_csv('./api-server/factory/test_list.csv')

print(train_df.label.value_counts())
print(test_df.label.value_counts())

X_train = train_df[['expression', 'lead', 'sense']]
y_train = train_df['label']

X_test = test_df[['expression', 'lead', 'sense']]
y_test = test_df['label']

le = preprocessing.LabelEncoder()
y_encoded = le.fit_transform(y_train)

clf = tree.DecisionTreeClassifier(max_depth=10, 
                                  min_samples_split=2,
                                  min_samples_leaf=2, 
                                  random_state=70).fit(X_train, y_encoded)

dot_data = tree.export_graphviz(clf, out_file=None)
graph = graphviz.Source(dot_data)

dot_data = tree.export_graphviz(clf, out_file=None, 
                         feature_names=['expression', 'lead', 'sense'],  
                         class_names=['els', 'nels', 'enls', 'elns', 'nenls', 'enlns', 'nelns', 'nenlns'],  
                         filled=True, rounded=True,  
                         special_characters=True)  
graph = graphviz.Source(dot_data)  
print(graph)

pred = clf.predict(X_test)
y_test_encoded = le.transform(y_test)
print("accuracy :", accuracy_score(y_test_encoded, pred))

# comparison = pd.DataFrame({'prediction':le.inverse_transform(pred), 'ground_truth':y_test}) 
comparison = pd.DataFrame({'prediction':le.inverse_transform(pred), 'ground_truth':le.inverse_transform(y_test_encoded)}) 
print(comparison)
