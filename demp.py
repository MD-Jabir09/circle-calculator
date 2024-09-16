import subprocess

def get_ethernet_info():
    try:
        # Run ipconfig command to get detailed Ethernet information
        output = subprocess.check_output(['ipconfig', '/all'], stderr=subprocess.STDOUT).decode('utf-8')
        print("Ethernet Configuration Details:")
        print(output)
    except subprocess.CalledProcessError as e:
        print(f"Error retrieving Ethernet information: {e}")
        print(e.output.decode())

# Usage
get_ethernet_info()
