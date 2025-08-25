from flask import Flask, request, send_file
from PyPDF2 import PdfMerger
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/combine', methods=['POST'])
def combine_pdfs():
    files = request.files.getlist('files')
    merger = PdfMerger()

    for file in files:
        merger.append(file)

    output_path = 'combined3.pdf'
    merger.write(output_path)
    merger.close()

    return send_file(output_path, as_attachment=True)