import sys
import json
import requests
import clipboard
import numpy as np
def uniqueN(list1):
    x = np.array(list1)
    print(np.unique(x))
    return(np.unique(x)) 
def em(en):
    struct=""
    for index, item in enumerate(en):    
        print(index,item)

# url = 'https://jsonplaceholder.typicode.com/todos/1' 
# response = requests.get(url)        # To execute get request 
# print(response.status_code)     # To print http response code  
# print(response.text)            # To print formatted JSON response 

filename="C:\projects\wither7007.github.io\streets\data.json"
with open(filename) as f:
   data = json.load(f)
print(data)
filenameX="C:\projects\wither7007.github.io\streets\extend.json"
with open(filenameX) as f:
   dataX = json.load(f)
print(dataX)
data.append(dataX[7])
print(data)
dum=json.dumps(data, indent=4, separators=(',', ': '))
hope=open(filename,"w+")
hope.write(str(dum))

hope.close()
datajl = json.load(data)
dum=json.dumps(data, indent=4, separators=(',', ': '))
type(dum)
'''

C:\projects\wither7007.github.io\json\a
C:\projects\wither7007.github.io\json\b
C:\projects\wither7007.github.io\json\com.py
C:\projects\wither7007.github.io\json\data.json
C:\projects\wither7007.github.io\json\extend.json
file=r"data.json"
strinq=json.dumps([1, 2, 3, {'4': 5, '6': 7}], separators=(',', ':'))
type(strinq)
j=json.dumps(['foo', {'bar': ('baz', None, 1.0, 2)}])
type(j)
json.dumps([1,3])
dS=json.dumps([[1,3],[4,5,6]])
sL=json.loads(j)
print(f"dump is {type(sL)}")
sK=json.loads(dS)
with open (file) as fp:
    js=json.load(fp)

'''