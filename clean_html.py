import Tkinter, tkFileDialog, os, io
ROOT = Tkinter.Tk()
ROOT.withdraw()

def decide_file(is_output):
	if (is_output):
		return tkFileDialog.asksaveasfile(title="Select where to save your html file:", defaultextension='.html')
	else:
		return io.open(tkFileDialog.askopenfilename(title="Select an html file to clean:"), 'r+')

FILE = decide_file(False)
OUTPUT_FILE = decide_file(True)

def clean_file(openfile, output):
	current_indent = 0
	current_line = openfile.readline()
	inString = False
	while (current_line != ""):
		if (current_line.strip(" ")[0:2] == "</"):
			current_indent -= 1
			current_line = current_indent * "  " + current_line.strip(" ")
			current_indent += 1
		else:
			current_line = current_indent * "  " + current_line.strip(" ")
		output.write(current_line)
		for i in xrange(len(current_line) - 1):
			if current_line[i] == '"':
				inString = not inString
			elif inString == False and current_line[i] == "<" and current_line[i:i+4] == "<img" or current_line[i:i+6] == "<video":
				current_indent = current_indent
			elif inString == False and current_line[i] == "<" and current_line[i+1] != "/" and current_line[i+1] != "!" and current_line[i:i+4] != "<br>":
				current_indent += 1
			elif inString == False and current_line[i] == "<" and current_line[i+1] == "/":
				current_indent -= 1
			elif inString == False and current_line[i] == "/" and current_line[i+1] == ">":
				current_indent -= 1
		current_line = openfile.readline()

clean_file(FILE, OUTPUT_FILE)