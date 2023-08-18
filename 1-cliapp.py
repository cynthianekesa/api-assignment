import requests
import argparse

def get_country_info(Kenya):
    url = f"https://restcountries.com/v3.1/name/Kenya?fullText=true"
    response = requests.get(url)
    
    if response.status_code == 200:
        country_data = response.json()[0]
        return country_data
    else:
        print("Error: Unable to fetch country information.")
        return None

def main():
    parser = argparse.ArgumentParser(description="Get information about a country")
    parser.add_argument("country_name", help="Name of the country to get information about")
    args = parser.parse_args()

    country_name = args.country_name
    country_info = get_country_info(country_name)

    if country_info:
        print("Country Information:")
        print(f"Name: {country_info['name']['official']}")
        print(f"Capital: {country_info['capital'][0]}")
        print(f"Population: {country_info['population']}")
        print(f"Area: {country_info['area']} sq km")
        print(f"Region: {country_info['region']}")
        print(f"Subregion: {country_info['subregion']}")
        print(f"Languages: {', '.join(country_info['languages'])}")

if __name__ == "__main__":
    main()
