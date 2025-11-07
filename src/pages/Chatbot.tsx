import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";
import ChatSidebar from "@/components/ui/ChatSidebar";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface Conversation {
  id: string;
  title: string;
  timestamp: Date;
  messages: Message[];
}

const Chatbot = () => {
  const { toast } = useToast();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConversation = conversations.find(c => c.id === activeConversationId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeConversation?.messages]);

  const handleNewConversation = () => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: "Nouvelle conversation",
      timestamp: new Date(),
      messages: [],
    };
    setConversations([newConversation, ...conversations]);
    setActiveConversationId(newConversation.id);
    setSidebarOpen(false);
    toast({
      title: "Nouvelle conversation",
      description: "Prêt à vous écouter",
    });
  };

  const handleSelectConversation = (id: string) => {
    setActiveConversationId(id);
    setSidebarOpen(false);
  };

  const handleDeleteConversation = (id: string) => {
    setConversations(conversations.filter(c => c.id !== id));
    if (activeConversationId === id) {
      setActiveConversationId(null);
    }
    toast({
      title: "Conversation supprimée",
      variant: "destructive",
    });
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    let currentConversation = activeConversation;

    // Create new conversation if none exists
    if (!currentConversation) {
      const newConversation: Conversation = {
        id: Date.now().toString(),
        title: input.slice(0, 30) + (input.length > 30 ? "..." : ""),
        timestamp: new Date(),
        messages: [],
      };
      setConversations([newConversation, ...conversations]);
      setActiveConversationId(newConversation.id);
      currentConversation = newConversation;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    // Update conversation with user message
    setConversations(prev =>
      prev.map(c =>
        c.id === currentConversation.id
          ? { ...c, messages: [...c.messages, userMessage] }
          : c
      )
    );

    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Je vous comprends. Merci de partager vos sentiments avec moi. Comment puis-je vous aider aujourd'hui ? Je suis là pour vous écouter et vous accompagner dans votre parcours de bien-être.`,
        timestamp: new Date(),
      };

      setConversations(prev =>
        prev.map(c =>
          c.id === currentConversation.id
            ? { ...c, messages: [...c.messages, botMessage] }
            : c
        )
      );
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
  {/* Navbar en haut */}
  <Navigation />

      <ChatSidebar
        conversations={conversations}
        activeConversationId={activeConversationId}
        onNewConversation={handleNewConversation}
        onSelectConversation={handleSelectConversation}
        onDeleteConversation={handleDeleteConversation}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col md:ml-64">
        {/* Chat Header */}
        <header className="border-b border-border p-4 bg-card">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-xl font-semibold flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              MindCare Bot
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Votre compagnon d'écoute bienveillante
            </p>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="container max-w-4xl mx-auto space-y-4">
            {!activeConversation || activeConversation.messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4 animate-fade-in">
                <div className="h-20 w-20 rounded-full gradient-hero flex items-center justify-center shadow-soft">
                  <Bot className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Bienvenue sur MindCare Bot</h2>
                  <p className="text-muted-foreground max-w-md">
                    Je suis là pour vous écouter et vous accompagner. Partagez vos pensées et émotions en toute confiance.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl w-full pt-4">
                  {[
                    "Je me sens un peu anxieux aujourd'hui",
                    "J'aimerais parler de mes émotions",
                    "Comment gérer le stress ?",
                    "J'ai besoin de conseils pour mieux dormir",
                  ].map((suggestion, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="justify-start h-auto py-3 px-4 text-left"
                      onClick={() => setInput(suggestion)}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              activeConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-fade-in ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="h-8 w-8 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <Card
                    className={`max-w-[80%] p-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </Card>
                  {message.role === "user" && (
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <User className="h-4 w-4 text-accent-foreground" />
                    </div>
                  )}
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex gap-3 animate-fade-in">
                <div className="h-8 w-8 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <Card className="max-w-[80%] p-4">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-100" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-200" />
                  </div>
                </Card>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-border p-4 bg-card">
          <div className="container max-w-4xl mx-auto">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Écrivez votre message ici..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                variant="hero"
                size="icon"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              MindCare Bot utilise l'IA pour vous accompagner. Vos conversations sont confidentielles.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
