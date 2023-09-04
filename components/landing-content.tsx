"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Jamal Smith",
        avatar: "A",
        title: "Comedian's Dream",
        description: "This AI app cracks me up! It's got sass for days and always has a witty comeback. Great for lifting your spirits on a bad day."
    },
    {
        name: "Priya Patel",
        avatar: "A",
        title: "AI Critic",
        description: "This app doesn't hold back! If you're looking for an AI that will keep you on your toes and entertain you with its sassy comments, this is the one."
    },
    {
        name: "Nguyen Tran",
        avatar: "A",
        title: "AI Sarcasm Expert",
        description: "I've never encountered an AI with such a sarcastic sense of humor. It's like having a snarky friend in your pocket. Love it!"
    },
    {
        name: "Yuki Nakamura",
        avatar: "A",
        title: "Sassy Conversationalist",
        description: "The sassy AI app is my new favorite companion. Whether I need a good laugh or some clever comebacks, it never disappoints."
    },
    {
        name: "Rashid Williams",
        avatar: "A",
        title: "AI Strategist",
        description: "This app's sassy remarks are backed by some serious AI intelligence. It's like talking to a genius with an attitude."
    },
    {
        name: "Aisha Kumar",
        avatar: "A",
        title: "Sass Master",
        description: "I can't get enough of this sassy AI app. It's quick-witted, hilarious, and never fails to make me smile."
    },
    {
        name: "Minh Nguyen",
        avatar: "A",
        title: "AI Consultant",
        description: "If you want an AI that will sass you up and down, this app is it! It's like having a sassy robot friend by your side."
    },
    {
        name: "Hiroshi Tanaka",
        avatar: "A",
        title: "Software Dev",
        description: "Finally, an AI app with personality! It's not just helpful; it's entertaining with its sassy twists on things"
    },
    {
        name: "Malik Johnson",
        avatar: "A",
        title: "Nurse Practitioner",
        description: "This sassy AI app has made my day countless times. It's sassy, smart, and always adds a fun twist to my conversations."
    },
    {
        name: "Aiko Suzuki",
        avatar: "A",
        title: "Fashionista",
        description: "I'm addicted to the sassy banter of this AI app. It's like having a comedy show in my pocket, and I can't get enough!"
    },
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white" >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                        
                    </Card>
                ))}
            </div>
        </div>
    )
}