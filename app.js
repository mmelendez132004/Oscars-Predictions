// app.js

// Function to manage predictions
class PredictionManager {
    constructor() {
        this.predictions = this.loadPredictions();
    }

    loadPredictions() {
        const data = localStorage.getItem('predictions');
        return data ? JSON.parse(data) : [];
    }

    savePredictions() {
        localStorage.setItem('predictions', JSON.stringify(this.predictions));
    }

    addPrediction(prediction) {
        this.predictions.push(prediction);
        this.savePredictions();
    }

    getPredictions() {
        return this.predictions;
    }
}

// Example usage:
const manager = new PredictionManager();
manager.addPrediction({ name: 'Best Picture', value: 'Movie Name' });
console.log(manager.getPredictions());