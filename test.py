# Check if sklearn is installed and Iris is available
import sklearn
from sklearn.datasets import load_iris

print(f"Scikit-learn version: {sklearn.__version__}")

# Try loading Iris
try:
    iris = load_iris()
    print("✓ Iris dataset loaded successfully!")
    print(f"  - Features: {iris.feature_names}")
    print(f"  - Classes: {iris.target_names}")
    print(f"  - Shape: {iris.data.shape}")
except Exception as e:
    print("✗ Error loading Iris:", e)
    
    
    