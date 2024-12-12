const fs = require('fs');
const path = require('path');

// Define the directory path
const dirPath = path.join(__dirname, '/Texts');

// Define the input files and output file
const inputFiles = ['input1.txt', 'input2.txt', 'input3.txt'];
const outputFilePath = path.join(dirPath, 'merged-output.txt');

// Initialize the output content
let mergedContent = '';

// Read the content of each input file
const fileContents = inputFiles.map((file) => {
  const filePath = path.join(dirPath, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent.split('\r\n'); // Split content by carriage return + new line
});

// Maximum number of lines to copy starts at 1
let numLinesToCopy = 1;
let lineIndexes = new Array(inputFiles.length).fill(0); // Track the line index for each file

// Continue copying lines until no more lines are left in any of the files
let filesRemaining = true;

while (filesRemaining) {
  filesRemaining = false;  // Assume all files are empty unless we find otherwise

  for (let i = 0; i < inputFiles.length; i++) {
    if (fileContents[i].length > lineIndexes[i]) {
      filesRemaining = true;  // There's still content in the current file
      // Extract the required number of lines to copy, respecting the file's remaining content
      const linesToCopy = fileContents[i].slice(lineIndexes[i], lineIndexes[i] + numLinesToCopy);

      // Skip empty lines
      const nonEmptyLines = linesToCopy.filter(line => line.trim() !== '');

      // Append only non-empty lines
      if (nonEmptyLines.length > 0) {
        mergedContent += nonEmptyLines.join('\r\n') + '\r\n';  // Join lines with \r\n for consistency
      }

      lineIndexes[i] += numLinesToCopy; // Update the index for the next iteration
    }
  }

  // Increase the number of lines to copy in the next iteration
  numLinesToCopy++;
}

// Write the merged content to the output file
fs.writeFileSync(outputFilePath, mergedContent);
console.log('File merging completed successfully!');
