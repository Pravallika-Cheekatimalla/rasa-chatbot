from rasa_sdk import Action

class ActionGetWeather(Action):
    def name(self) -> str:
        return "action_get_weather"

    def run(self, dispatcher, tracker, domain):
        # Fetch weather data from an API or some other logic
        weather = "It's sunny today!"
        dispatcher.utter_message(text=weather)
        return []
