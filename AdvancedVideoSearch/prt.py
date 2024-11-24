import fileinput

filename = "review.txt"

with fileinput.FileInput(filename, inplace = True, backup ='.bak') as f:
    for line in f:
        if("S" in line):
            print(line.replace("Steffes","   xxxxx    "), end ='')
        else:
            print(line, end ='') 
