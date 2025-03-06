from django.http import JsonResponse

def features_list(request):
    features = [
        {"id": 1, "title": "Scalability", "description": "Django and React allow you to build scalable applications, handling both backend and frontend efficiently."},
        {"id": 2, "title": "Speed & Performance", "description": "React's virtual DOM and Django's optimized queries ensure high performance and fast load times."},
        {"id": 3, "title": "Component-Based UI", "description": "React allows you to build reusable UI components, making frontend development more efficient."},
        {"id": 4, "title": "REST API Integration", "description": "Django REST Framework makes it easy to build APIs that seamlessly integrate with React."},
        {"id": 5, "title": "Security", "description": "Django provides built-in security features like SQL injection prevention, authentication, and CSRF protection."},
        {"id": 6, "title": "SEO-Friendly", "description": "React with server-side rendering (SSR) improves SEO, making applications more discoverable."},
        {"id": 7, "title": "Rapid Development", "description": "Django's 'batteries-included' approach speeds up backend development, while React enables fast UI iteration."},
        {"id": 8, "title": "Strong Community Support", "description": "Both Django and React have large communities, providing extensive documentation and support."},
    ]
    return JsonResponse(features, safe=False)
