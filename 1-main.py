#!/usr/bin/python3
"""
1-main
"""
import sys

if __name__ == '__main__':
    get_country_info = __import__('1-cliapp').get_country_info
    if len(sys.argv) < 2:
        print("Please pass an argument for the function to search.")
    else:
        get_country_info(sys.argv[1])