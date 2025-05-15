#!pip install -q kokoro>=0.9.2 soundfile
#!apt-get -qq -y install espeak-ng > /dev/null 2>&1
import sys
if len(sys.argv) != 2:
    print("Usage: python file.py <file_path_input>")
    print(sys.argv)
    sys.exit(1)
file_path_input = sys.argv[1]

contents = ''
with open(file_path_input, 'r', encoding='utf-8') as f:
    contents = f.read()
#print(contents)

from kokoro import KPipeline
from IPython.display import display, Audio
import soundfile as sf
import torch
import os
import json
from pathlib import Path

root = json.loads(contents)
for unit in root['units']:
    print(json.dumps(unit))
    folder_path_output = unit['path']
    pipeline = KPipeline(lang_code='a')
    speed=1
    generator = pipeline(unit['text'], voice=unit['voice'], speed=speed)
    count = 0
    for i, (gs, ps, audio) in enumerate(generator):
        print('i:')
        print(i)
        ' this is the text to save :gs'
        print('gs:')
        print(gs)
        print('ps:')
        print(ps)
        display(Audio(data=audio, rate=24000, autoplay=i==0))
        file_path_output = folder_path_output + f"_{i + 1}.wav"
        p = Path(file_path_output)
        p.parent.mkdir(parents=True, exist_ok=True)
        sf.write(file_path_output, audio, 24000)
        count += 1

    padding = len(str(count))
    for i in range(count):
        file_path_output = folder_path_output + f"_{i + 1}.wav"
        file_path_output_new = folder_path_output + f"_{(i + 1):0{padding}d}.wav"
        if file_path_output_new != file_path_output:
            os.rename(file_path_output, file_path_output_new)
        print(file_path_output_new)

