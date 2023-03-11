# import pandas as pd
# train_df = pd.read_csv('./api-server/factory/district_dict_list.csv')
# test_df = pd.read_csv('./api-server/factory/dong_dict_list.csv')
# train_df.head()

# print(train_df.label.value_counts())
# print(test_df.label.value_counts())

# train_df.drop(['district'], axis=1, inplace=True)
# test_df.drop(['dong'], axis=1, inplace=True)

# X_train = train_df[['longitude', 'latitude']]
# y_train = train_df[['label']]

# X_test = test_df[['longitude', 'latitude']]
# y_test = test_df[['label']]

# from sklearn import tree, preprocessing
# import numpy as np

# le = preprocessing.LabelEncoder()
# # label 값을 숫자 값으로 인코딩해줌
# # 강남, 강북, 강동, 강서가 있으면 0, 1, 2, 3으로 바꿔준다.

# y_encoded = le.fit_transform(y_train)

# clf = tree.DecisionTreeClassifier(max_depth=4, 
#                                   min_samples_split=2,
#                                   min_samples_leaf=2, 
#                                   random_state=70).fit(X_train, y_encoded.ravel())

# # max_depth : 트리의 최대 한도 높이
# # min_samples_split: 자식 노드를 갖기 위한 최소한의 데이터 개수, 간단히말해 최소 몇 번 질문할 것인지 설정하는 것이다.
# # 동일한 학습 결과 나타내게 하기 위하여 고정시킴

# from sklearn.metrics import accuracy_score
# pred = clf.predict(X_test)
# print("accuracy :" + str(accuracy_score(y_test.values.ravel(), le.classes_[pred])))

# comparison = pd.DataFrame({'prediction':le.classes_[pred], 'ground_truth':y_test.values.ravel()}) 
# comparison

import pandas as pd
from sklearn import tree, preprocessing
from sklearn.metrics import accuracy_score

train_df = pd.read_csv('./api-server/factory/district_dict_list.csv')
test_df = pd.read_csv('./api-server/factory/dong_dict_list.csv')

print(train_df.label.value_counts())
print(test_df.label.value_counts())

X_train = train_df[['expression', 'lead', 'sense']]
y_train = train_df['label']

X_test = test_df[['expression', 'lead', 'sense']]
y_test = test_df['label']

le = preprocessing.LabelEncoder()
y_encoded = le.fit_transform(y_train)

clf = tree.DecisionTreeClassifier(max_depth=4, 
                                  min_samples_split=2,
                                  min_samples_leaf=2, 
                                  random_state=70).fit(X_train, y_encoded)

pred = clf.predict(X_test)
y_test_encoded = le.transform(y_test)
print("accuracy :", accuracy_score(y_test_encoded, pred))

comparison = pd.DataFrame({'prediction':le.inverse_transform(pred), 'ground_truth':y_test}) 
print(comparison)
