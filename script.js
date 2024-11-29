document.getElementById('checkGrammarBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;

    if (!inputText.trim()) {
        alert('Please enter some text.');
        return;
    }

    try {
        const response = await fetch('/api/check-grammar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: inputText }),
        });

        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();
        document.getElementById('resultBox').classList.remove('hidden');
        document.getElementById('resultText').textContent = data.result;
    } catch (error) {
        alert('An error occurred. Please try again.');
        console.error(error);
    }
});
