import csv
import os
import sys
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression


def load_dataset(dataset_path):
    texts = []
    labels = []

    with open(dataset_path, "r", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            text = row.get("text", "").strip()
            emotion = row.get("emotion", "").strip()
            if text and emotion:
                texts.append(text)
                labels.append(emotion)

    return texts, labels


def train_model(texts, labels):
    vectorizer = TfidfVectorizer(ngram_range=(1, 2), lowercase=True)
    x_train = vectorizer.fit_transform(texts)

    model = LogisticRegression(max_iter=1000)
    model.fit(x_train, labels)

    return vectorizer, model


def predict_mood(vectorizer, model, input_text):
    x_input = vectorizer.transform([input_text])
    probabilities = model.predict_proba(x_input)[0]
    best_index = probabilities.argmax()

    mood = model.classes_[best_index]
    confidence = probabilities[best_index]

    return mood, confidence


def main():
    if len(sys.argv) < 2:
        print("relaxed")
        return

    user_text = " ".join(sys.argv[1:]).strip()
    if not user_text:
        print("relaxed")
        return

    dataset_path = os.path.join(os.path.dirname(__file__), "dataset.csv")
    texts, labels = load_dataset(dataset_path)

    if not texts or not labels:
        print("relaxed")
        return

    vectorizer, model = train_model(texts, labels)
    mood, confidence = predict_mood(vectorizer, model, user_text)

    # Output remains mood-only for Node integration simplicity.
    print(mood)


if __name__ == "__main__":
    main()
