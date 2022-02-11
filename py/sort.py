import random
import json
import requests
spreadTab="st"
outputFile="data"
r = [random.randint(0, 26) for x in range(200)]


# sheetsUrl=f"https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/{spreadTab}?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
# s=requests.get(sheetsUrl)
# final=s.json()
# p=final['values']
# from operator import itemgetter
# C = [[10, 8, 'Cat'], [90, 2, 'Dog'], [45, 6, 'Bird']]
# # sor=sorted(p, key=itemgetter(2), reverse=True)

filename="C:\projects\wither7007.github.io\streets\data.json"
with open(filename) as f:
   data = json.load(f)
# datas=data.sort(key=lambda row: (row[8], row[0]) )
# datas=data.sort(key=lambda row: (row[8], row[0]) )
# data.sort(key=lambda  row[0]) )

data.sort(key=lambda row: (row[8], row[0]) )
yk=json.dumps(data,indent=4)
file2 = open(f"C:\projects\wither7007.github.io\streets\{outputFile}.json","w+")
file2.write(str(yk))
file2.close()
