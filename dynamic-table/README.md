# Dynamic Table
Please create a function that will create a dynamic table that contains numbers. It has 2 parameters, parameter 1 is an array of numbers as the content of the table, and parameter 2 is a number as the maximum number of column per row.

## Details:
```bash
F(x, y)

x = [n], when n is an Integer >= 0 
y = m, when m is an Integer >= 1
```

## Additional rules:

- Maximum length that a column can contains is the longest length of a number in the array.
- You will put a star ( * ) for any number in a column that not as long as the maximum length of the column.
- The numbers will be placed in the table sequentially same as the way you put it in the array, start from top left of the first row, go to the max column, then going down. So last number should be at the bottom (most right) of the last row.
- You must have separator ( | ) between columns.
- Use plus sign ( + ) as the corner of a column.
- Use equal sign ( = ) as the line of the column.

## Sample input:
```bash
x = [12, 444, 54643, 3155, 667543, 8637, 0, 369, 7516, 335]
y = 4
```
## Sample output:
```bash
 +======+======+======+======+
 |****12|***444|*54643|**3155|
 +======+======+======+======+
 |667543|**8637|*****0|***369|
 +======+======+======+======+
 |**7516|***335|
 +======+======+
```