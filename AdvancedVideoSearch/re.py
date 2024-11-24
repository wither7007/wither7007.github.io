reading_file = open("file.txt", "r")

new_file_content = ""
for line in reading_file:
    stripped_line = line.strip()
    new_line = stripped_line.replace("a", "   Steffes   ")
    new_file_content += new_line +"\n"
reading_file.close()

writing_file = open("review.txt", "w")
writing_file.write(new_file_content)
writing_file.close()
