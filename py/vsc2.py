import sys
import json
import requests
import clipboard
import numpy as np


file2 = open(r"C:\projects\wither7007.github.io\streets\data.json")
data = json.load(file2)
file3 = open(r"C:\projects\wither7007.github.io\streets\extend.json")
dataE = json.load(file3)
data.append(dataE[1])
data.append(dataE[0])
yk=json.dumps(data,indent=4)
datax = json.load(data)
yks=str(yk)
file2 = open(r"C:\projects\wither7007.github.io\streets\data.json","w+")
file2.write(str(data))
file2.close()