import sys
import json
import requests
import clipboard
import numpy as np
cats=[]
cats6=[]
catsCat=[] 
# function to get unique values
def uniqueN(list1):
    x = np.array(list1)
    print(np.unique(x))
    return(np.unique(x)) 
def em(en):
    struct=""
    for index, item in enumerate(en):    
        if index % 7==0:
          print(index, item, en[index-1], en[index-6])
          struct+=f"{index} {item} \n"
          cats.append(item)
          cats6.append(en[index-6])
          catsCat.append(en[index-1])
          
        
def unique(list1):
 
    # initialize a null list
    unique_list = []
     
    # traverse for all elements
    for x in list1:
        # check if exists in unique_list or not
        if x not in unique_list:
            unique_list.append(x)
    # print list
    for x in unique_list:
        print(x) ,
sheets='https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json!A1:A50000?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw' 
r=requests.get(sheets)
sheetsD=r.json()
sheetsV=sheetsD['values']
em(sheetsV)
sys.exit()
# fn=uniqueN(cats6)
# clipboard.copy(str(cats6.sort()))
# import json
 
 
# # function to add to JSON
# def write_json(new_data, filename='data.json'):
#     with open(filename,'r+') as file:
#           # First we load existing data into a dict.
#         file_data = json.load(file)
#         # Join new_data with file_data inside emp_details
#         file_data["emp_details"].append(new_data)
#         # Sets file's current position at offset.
#         file.seek(0)
#         # convert back to json.
#         json.dump(file_data, file, indent = 4)
#     # python object to be appended
# y = {"emp_name":"Nikhil",
#      "email": "nikhil@geeksforgeeks.org",
#      "job_profile": "Full Time"
#     }
     
# write_json(y)
# sys.exit()







# import json
# o = son.loads("""[
#     {
#         "ename": "mark",
#         "url": "Lennon.com"
#     },
#     {
#         "ename": "egg",
#         "url": "Lennon.com"
#     }
# ]""")
# # kick out the unwanted item from the list
# o = filter(lambda x: x['ename']!="mark", o)
# output_string = json.dumps(o)
# '''
# sheetsUrl="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
# s=requests.get(sheetsUrl
# final=s.json()
# our_list = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]]

# def split(list, no):
#     i=0
#     while i < len(list):
#         print(list[i])
#         i=i+no
# print(split(data,3))
# f=open(r'C:\projects\wither7007.github.io\streets\data.json')
# with open('filename.txt', 'w') as f:
#   for x in data:
#     print(f"{len(x)}")
# chunked_list = list()
# with open('filename.txt', 'w') as f:
#   for x in data:
#     print(f"{x[0], x[8]}", file=f)
# chunk_size = 2
# data=json.load(f)

# # g=data['values']
# sheetsUrl="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
# s=requests.get(sheetsUrl)
# final=s.json()
# for i in range(0, len(our_list), chunk_size):
#     chunked_list.append(our_list[i:i+chunk_size])
# # def clist(r_list):
# #   for i in range(0, len(r_list), chunk_size):
# #       chunked_list.append(r_list[i:i+chunk_size])
#   # print(chunked_list)
# # c=clist(final)
# # v=clist(our_list)
# from itertools import zip_longest
# our_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
# chunk_size = 3
# chunked_list = list(zip_longest(*[iter(our_list)]*chunk_size, fillvalue=''))
# print(chunked_list)
# # Returns: [(1, 2, 3), (4, 5, 6), (7, 8, 9), (10, 11, '')]
# chunked_list = [list(item) for item in list(zip_longest(*[iter(our_list)]*chunk_size, fillvalue=''))]
# print(chunked_list)
# test_list = ['1','2','3','4','5','6','7','8','9','10'] 

# def split_list(lst, n):  
#     for i in range(0, len(lst), n): 
#         yield lst[i:i + n] 

# n = 3

# output = list(split_list(test_list, n)) 
# print(output)
# '''