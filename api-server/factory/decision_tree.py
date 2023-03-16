import pandas as pd
from sklearn import tree, preprocessing
from sklearn.metrics import accuracy_score

train_df = pd.read_csv('./api-server/factory/train_list.csv')
test_df = pd.read_csv('./api-server/factory/test_list.csv')

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

pred = clf.predict(X_test)
y_test_encoded = le.transform(y_test)
print("accuracy :", accuracy_score(y_test_encoded, pred))

comparison = pd.DataFrame({'prediction':le.inverse_transform(pred), 'ground_truth':le.inverse_transform(y_test_encoded)}) 
print(comparison)
