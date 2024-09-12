import re

def tokenize(code):
    # Recognize 'asg', 'display', and other symbols
    tokens = re.findall(r'\d+|asg|display|==|[a-zA-Z_][a-zA-Z0-9_]*|\S', code)
    return tokens
class Parser:
    def __init__(self, tokens):
        self.tokens = tokens
        self.pos = 0

    def parse(self):
        ast = []
        while self.pos < len(self.tokens):
            token = self.tokens[self.pos]
            if token == "asg":
                ast.append(self.parse_asg())
            elif token == "display":
                ast.append(self.parse_display())
            self.pos += 1
        return ast

    def parse_asg(self):
        self.pos += 1  # Skip 'asg'
        var_name = self.tokens[self.pos]
        self.pos += 2  # Skip variable name and '='
        value = self.tokens[self.pos]
        return ('asg', var_name, int(value))

    def parse_display(self):
        self.pos += 1  # Skip 'display'
        value = self.tokens[self.pos]
        return ('display', value)
class Interpreter:
    def __init__(self, ast):
        self.ast = ast
        self.environment = {}

    def interpret(self):
        for node in self.ast:
            if node[0] == 'asg':
                self.environment[node[1]] = node[2]
            elif node[0] == 'display':
                # Handle either a variable or a direct value
                print(self.environment.get(node[1], node[1]))

# Example Usage:
code = """
asg x=10;
display(x);
"""

tokens = tokenize(code)
parser = Parser(tokens)
ast = parser.parse()
interpreter = Interpreter(ast)
interpreter.interpret()
