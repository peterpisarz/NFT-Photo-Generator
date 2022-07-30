print("Hello World")
print("pwd")

import csv
data = open('./scripts/AttributeArray.csv', "Utf-8")
csv_data = csv.reader(data)
data_lines = list(csv_data)
print(data_lines)
print(len(data_lines), " Rows")
print(len(data_lines[0]), " Columns")