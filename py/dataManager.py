import requests
import clipboard
import re
import json
import itertools
import sys
def phone(number):
    pPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), number)
    # print(pPhone)
    return(pPhone)
def em(en):
    struct=""
    for index, item in enumerate(en):    
        print(index, item)
        struct+=f"{index} {item} \n"
    clipboard.copy(struct)

sheetsUrl="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
s=requests.get(sheetsUrl)
final=s.json()
# print("=======================================================")
# print(final.keys())
arr=final['values']
g=[]
st=1
fi=7
i=0
for a in range(int(len(arr)/6)):
    l=list(itertools.chain.from_iterable(arr[st:fi]))
    l.append("")
    l.append("")
    try:
        l.append(arr[fi-1][0])
    except Exception as e:
        # print(f"Which is {which}")
        # print(f"o['name' is {o['name']}")
        print(a)
        print("an error")
        print (e)
        # print("An exception occurred")
    # l.append(arr[fi-1][0])
    l.append(f"{i}")
    l.append("")
    l.append("no address")
    l.append("")
    l.append("")
    l.append("")
    l.append("www.sample.com")
    # print(l)
    st+=7
    fi+=7
    # print(f"{i} - {st} fi: {fi} len {len(l)} {l}")
    i+=1
    # if i>5:
    #     sys.exit()
    if len(l[0]) > 0:
        g.append(l)
yk=json.dumps(g,indent=4)
# for each in g:
#     print(each[2])


# print(yk[0:945])
clipboard.copy(yk)
file2 = open(r"C:\projects\wither7007.github.io\streets\data.json","w+")
file2.write(str(yk))
file2.close()