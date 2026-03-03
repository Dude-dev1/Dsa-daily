#The Iris dataset is available in the sklearn.datasets library. It contains 150 samples of iris flowers with four features: sepal length, sepal width, petal length, and petal width. The flowers belong to three classes: Setosa, Versicolor, and Virginica.
#Using the Iris dataset from sklearn.datasets:
#1.	Load the dataset and split it into training and testing sets.
#2.	Train a K-Nearest Neighbors (KNN) classifier using K=5.
#3.	Use the trained model to predict the class of the test data.
#4.	Report the classification accuracy, precision and F1 score of the model.
#5.	Briefly explain what the evaluation metrics tells you about the performance of the KNN classifier.

from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, precision_score, f1_score
import numpy as np

# Load the iris dataset
iris = load_iris()

# Initialize the target and data variables
X = iris.data
y = iris.target

# Split the data into training and test factions
X_train, X_test, y_train, y_test  = train_test_split(X, y, test_size = 0.4, random_state = 50)

# Fit the model with the train data
model = KNeighborsClassifier(n_neighbors = 4)
model.fit(X_train, y_train)

# Use the model to prdict future values of y with test X data
y_pred = model.predict(X_test)

# Calculate the mse and rmse
mse = np.mean((y_test - y_pred) ** 2)
rmse = np.sqrt(mse)

# Determine the accuracy, precision and f1 score
accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred, average = 'weighted')
f1 = f1_score(y_test, y_pred, average = 'weighted')

# Print the mse and rmse to the terminal
print(f"Mean Sqyared Error: {mse:.2f}")
print(f"Root Mean Squared Error: {rmse:.2f}")

# Print the results to the terminal
print(f"Accuracy: {accuracy:.2f}")
print(f"Precision: {precision:.2f}")
print(f"F1 score: {f1:.2f}")





