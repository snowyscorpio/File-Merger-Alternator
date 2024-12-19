# File-Merger-Alternator

This repository contains a solution to a task that merges the contents of three input text files into a new output file, following a specific pattern.

## Task: Merge Contents of Three Files
Write a program that performs the following tasks:

1. Reads the content of three input text files.
2. Merges their contents in a specific order:
   - The program alternates between the three files, copying one line from each file in the first round, two lines in the second round, and so on.
   - If any of the files are shorter than others, the program continues copying lines from the remaining files.
3. Writes the merged content to a new output file.

### Solution Overview

The program is written in JavaScript using Node.js. It reads three input files, merges their contents according to the specified pattern, and writes the result to an output file.

- The input files (`input1.txt`, `input2.txt`, `input3.txt`) are located in the `Texts` folder.
- The merged output file is named `merged-output.txt` and is also saved in the `Texts` folder.

### Files and Folders

- `input1.txt`, `input2.txt`, `input3.txt` (Located in `Texts` folder): Contains the data that will be merged.
- `merged-output.txt` (Located in `Texts` folder): Contains the merged content of the three input files.

> The solution is included in a folder named "fileMergerAlternator".

> The `Texts` folder is inside the "fileMergerAlternator" folder.


### How to Run:
1. Clone the repository.
2. Navigate to the project directory.
3. Install Node.js if not already installed.
(using `npm install`)
4. Run the following command:
   ```bash
   node app.js



Have a great day ♡


![Cute Cat](https://github.com/user-attachments/assets/976879c0-fe8b-4a05-b34c-9ed7a6da8ef6)
