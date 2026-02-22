import os
import shutil

# Target countries/languages
languages = ['de', 'ru', 'fr', 'it', 'es', 'nl', 'ua']

for lang in languages:
    try:
        if not os.path.exists(lang):
            os.makedirs(lang)
            print(f"Created directory: {lang}")
        
        # Copy index.html to the new directory
        shutil.copy('index.html', f'{lang}/index.html')
        print(f"Copied index.html to {lang}/index.html")
    except Exception as e:
        print(f"Error processing {lang}: {e}")
