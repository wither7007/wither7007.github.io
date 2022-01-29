
def em(en):
    struct=""
    for index, item in enumerate(en):    
        if index % 7==0:
          print(index, item)
          struct+=f"{index} {item} \n"
import json
import requests
sheets='https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json!A1:A50000?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw' 
r=requests.get(sheets)
sheetsD=r.json()
sheetsV=sheetsD['values']
em(sheetsV)

'''
sheetsUrl="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
s=requests.get(sheetsUrl
final=s.json()
our_list = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]]

def split(list, no):
    i=0
    while i < len(list):
        print(list[i])
        i=i+no
print(split(data,3))
f=open(r'C:\projects\wither7007.github.io\streets\data.json')
with open('filename.txt', 'w') as f:
  for x in data:
    print(f"{len(x)}")
chunked_list = list()
with open('filename.txt', 'w') as f:
  for x in data:
    print(f"{x[0], x[8]}", file=f)
chunk_size = 2
data=json.load(f)

# g=data['values']
sheetsUrl="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
s=requests.get(sheetsUrl)
final=s.json()
for i in range(0, len(our_list), chunk_size):
    chunked_list.append(our_list[i:i+chunk_size])
# def clist(r_list):
#   for i in range(0, len(r_list), chunk_size):
#       chunked_list.append(r_list[i:i+chunk_size])
  # print(chunked_list)
# c=clist(final)
# v=clist(our_list)
from itertools import zip_longest
our_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
chunk_size = 3
chunked_list = list(zip_longest(*[iter(our_list)]*chunk_size, fillvalue=''))
print(chunked_list)
# Returns: [(1, 2, 3), (4, 5, 6), (7, 8, 9), (10, 11, '')]
chunked_list = [list(item) for item in list(zip_longest(*[iter(our_list)]*chunk_size, fillvalue=''))]
print(chunked_list)
test_list = ['1','2','3','4','5','6','7','8','9','10'] 

def split_list(lst, n):  
    for i in range(0, len(lst), n): 
        yield lst[i:i + n] 

n = 3

output = list(split_list(test_list, n)) 
print(output)
'''