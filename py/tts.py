#!pip install -q kokoro>=0.9.2 soundfile
#!apt-get -qq -y install espeak-ng > /dev/null 2>&1
import sys
if len(sys.argv) != 3:
    print("Usage: python file.py <file_path_input> <folder_path_output>")
    sys.exit(1)
file_path_input = sys.argv[1]
folder_path_output = sys.argv[2]

text = ''
with open(file_path_input, 'r', encoding='utf-8') as f:
    text = f.read()
print(text)

from kokoro import KPipeline
from IPython.display import display, Audio
import soundfile as sf
import torch
import os

os.makedirs(folder_path_output, exist_ok=True)

pipeline = KPipeline(lang_code='a')
speed=1
generator = pipeline(text, voice='am_michael', speed=speed)
names = []
count = 0
for i, (gs, ps, audio) in enumerate(generator):
    print(i, gs, ps)
    display(Audio(data=audio, rate=24000, autoplay=i==0))
    file_path_output = folder_path_output + f"_{i + 1}.wav"
    sf.write(file_path_output, audio, 24000)
    count += 1

padding = len(str(count))
for i in range(count):
    file_path_output = folder_path_output + f"_{i + 1}.wav"
    file_path_output_new = folder_path_output + f"_{(i + 1):0{padding}d}.wav"
    if file_path_output_new != file_path_output:
        os.rename(file_path_output, file_path_output_new)
    print(file_path_output_new)

