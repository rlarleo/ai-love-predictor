import pandas as pd
train_df = pd.read_csv('./api-server/factory/district_dict_list.csv')
test_df = pd.read_csv('./api-server/factory/dong_dict_list.csv')
train_df.head()

print(train_df.label.value_counts())
print(test_df.label.value_counts())

train_df.drop(['district'], axis=1, inplace=True)
test_df.drop(['dong'], axis=1, inplace=True)

X_train = train_df[['longitude', 'latitude']]
y_train = train_df[['label']]

X_test = test_df[['longitude', 'latitude']]
y_test = test_df[['label']]

from sklearn import tree, preprocessing
import numpy as np

le = preprocessing.LabelEncoder()
y_encoded = le.fit_transform(y_train)
clf = tree.DecisionTreeClassifier(max_depth = 4,
                                  min_samples_split=2,
                                  random_state=42).fit(X_train, y_encoded)


from sklearn.metrics import accuracy_score
pred = clf.predict(X_test)
print("accuracy :", str(accuracy_score(y_test.values.ravel(), le.classes_[pred])))

comparison = pd.DataFrame({'prediction':le.classes_[pred],
                           'ground_truth':y_test.values.ravel()})
comparison

