from django.views import View
from django.shortcuts import render

book = {
    'Chapter 1': 'All work and no play makes Jack a dull boy...',
    'Chapter 2': 'All work and no play makes Jack a dull boy...',
    'Chapter 3': 'All work and no play makes Jack a dull boy...',
    'Chapter 4': 'All work and no play makes Jack a dull boy...',
} 

class MainPageView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'book/contents.html', context={'book': book})