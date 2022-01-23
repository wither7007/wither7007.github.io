import requests
import clipboard
import re
import json
file=open(r"C:\projects\wither7007.github.io\streets\data.json")
dataf = json.load(file)
print(type(dataf[1]))
c=0
item=""
for k in dataf[1]:
    # print(f"{c} {k}")
    item+=f"{c} {k}\n"
    c+=1
# print(item)
sheetsUrl="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
s=requests.get(sheetsUrl)
final=s.json()
print("=======================================================")
# print(final)
print(final.keys())
me=dataf[5:9]
List = [50, 70, 30, 20, 90, 10, 50]
for i in range(5):
    print(i)
my_list = ['geeks', 'for', 'geeks', 'like',
           'geeky','nerdy', 'geek', 'love',
               'questions','words', 'life']
  
# Yield successive n-sized
# chunks from l.
def divide_chunks(l, n):
      
    # looping till length l
    for i in range(0, len(l), n): 
        yield l[i:i + n]
  
# How many elements each
# list should have
n = 5
  
x = list(divide_chunks(dataf, n))
# print (x)