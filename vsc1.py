import json
file=open(r"C:\projects\wither7007.github.io\streets\data.json")
# for a in file:
#     print(a)
data = json.load(file)
k=0
str=""
for i in range(0,5):
    print(f"\n********** {i}  *************\n")
    for a in data[i]:
        print(f"{k} {a}")
        k+=1
        str+=f"{k} {a}"
        str+="\n"
    k=0
# print(str)
print('done')