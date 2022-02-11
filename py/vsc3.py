import requests
import clipboard
import re
import json
import itertools
import sys
import shutil
def em(en):
    struct=""
    for index, item in enumerate(en):    
        print(index, item)
        struct+=f"{index} {item} \n"
    clipboard.copy(struct)

sheetsUrl="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
s=requests.get(sheetsUrl)
final=s.json()
# yk=json.dumps(s,indent=4)
# print(final)
from pathlib import Path
json_object = json.dumps(dictionary, indent = 4) 
print(json_object)
clipboard.copy(str(final))
print(Path('C:', '/', 'Users'))
file2 = open(r"C:\projects\wither7007.github.io\x.json","w+")
file2.write(str(final))
file2.close()