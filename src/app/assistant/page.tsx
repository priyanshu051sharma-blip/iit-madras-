'use client'

import React, { useState } from 'react'
import { Send, Paperclip, Mic, Copy, ThumbsUp, ThumbsDown, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'

const initialMessages = [
  {
    id: 'msg_001',
    role: 'assistant' as const,
    content: 'Hello! I\'m your AI Legal Assistant. I can help you understand traffic laws, calculate fines, answer legal questions, and provide driving safety guidance. How can I assist you today?',
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
  },
]

export default function AssistantPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedCitation, setSelectedCitation] = useState<any>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = {
      id: `msg_${Date.now()}`,
      role: 'user' as const,
      content: input,
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage = {
        id: `msg_${Date.now() + 1}`,
        role: 'assistant' as const,
        content: 'Thank you for your question. Based on Karnataka traffic regulations, ' +
          (input.toLowerCase().includes('helmet')
            ? 'wearing a helmet is mandatory for motorcycle riders. Non-compliance attracts a fine of ₹100 and possible imprisonment up to 3 months.'
            : input.toLowerCase().includes('speed')
            ? 'the speed limit varies by road type - 40 km/h in residential areas, 60 km/h in urban areas, and 80 km/h on highways. Exceeding limits can result in fines up to ₹500.'
            : 'I recommend checking the complete Motor Vehicles Act, 1988 for comprehensive legal information.'),
        timestamp: new Date().toISOString(),
        citations: [
          {
            id: 'cite_001',
            title: 'Motor Vehicles Act, 1988',
            source: 'Central Government',
            state: 'India',
            relevance: 0.95,
          },
          {
            id: 'cite_002',
            title: 'Karnataka Traffic Rules 2017',
            source: 'Karnataka Government',
            state: 'Karnataka',
            relevance: 0.88,
          },
        ],
      }

      setMessages((prev) => [...prev, assistantMessage])
      setLoading(false)
    }, 1000)
  }

  const suggestedQuestions = [
    'What is the fine for speeding in Karnataka?',
    'How do I calculate my challan amount?',
    'What documents are required for vehicle registration?',
    'What are the helmet safety requirements?',
    'How do I appeal a traffic violation?',
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">AI Legal Assistant</h1>
        <p className="mt-1 text-dark-600 dark:text-dark-400">
          Ask questions about traffic laws, fines, and road safety regulations
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chat Section */}
        <div className="lg:col-span-2">
          <Card className="flex h-[600px] flex-col">
            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto space-y-4 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                        AI
                      </div>
                    </div>
                  )}

                  <div
                    className={`max-w-md rounded-lg px-4 py-2 ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-100 dark:bg-dark-700 text-dark-900 dark:text-dark-50'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    {message.role === 'assistant' && (
                      <div className="mt-2 flex gap-2">
                        <button className="rounded p-1 hover:bg-dark-200 dark:hover:bg-dark-600">
                          <ThumbsUp size={14} />
                        </button>
                        <button className="rounded p-1 hover:bg-dark-200 dark:hover:bg-dark-600">
                          <ThumbsDown size={14} />
                        </button>
                        <button className="rounded p-1 hover:bg-dark-200 dark:hover:bg-dark-600">
                          <Copy size={14} />
                        </button>
                      </div>
                    )}
                  </div>

                  {message.role === 'user' && (
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-dark-300 dark:bg-dark-600" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex justify-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                    AI
                  </div>
                  <div className="flex gap-1 rounded-lg bg-dark-100 px-4 py-3 dark:bg-dark-700">
                    <div className="h-2 w-2 rounded-full bg-dark-400 animate-bounce" />
                    <div className="h-2 w-2 rounded-full bg-dark-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="h-2 w-2 rounded-full bg-dark-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}
            </CardContent>

            {/* Input */}
            <div className="border-t border-dark-200 p-4 dark:border-dark-700">
              <div className="flex gap-2">
                <button className="rounded-lg p-2 hover:bg-dark-100 dark:hover:bg-dark-700">
                  <Paperclip size={18} className="text-dark-600 dark:text-dark-400" />
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about traffic laws, fines, regulations..."
                  className="input flex-1"
                />
                <button className="rounded-lg p-2 hover:bg-dark-100 dark:hover:bg-dark-700">
                  <Mic size={18} className="text-dark-600 dark:text-dark-400" />
                </button>
                <Button onClick={handleSend} loading={loading} size="md">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar - Citations & Suggestions */}
        <div className="space-y-4">
          {/* Quick Suggestions */}
          <Card>
            <CardHeader title="Quick Questions" />
            <CardContent>
              <div className="space-y-2">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setInput(q)}
                    className="block w-full rounded-lg border border-dark-200 bg-white p-2 text-left text-xs font-medium transition-all hover:bg-primary-50 hover:border-primary-300 dark:border-dark-600 dark:bg-dark-800 dark:hover:bg-dark-700"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Legal References */}
          <Card>
            <CardHeader title="Legal References" subtitle="Important Acts & Rules" />
            <CardContent>
              <div className="space-y-3">
                <div className="rounded-lg bg-dark-50 p-3 dark:bg-dark-700">
                  <div className="flex items-start gap-2">
                    <BookOpen size={16} className="mt-0.5 flex-shrink-0 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium">Motor Vehicles Act, 1988</p>
                      <p className="text-xs text-dark-600 dark:text-dark-400">Central Government</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-dark-50 p-3 dark:bg-dark-700">
                  <div className="flex items-start gap-2">
                    <BookOpen size={16} className="mt-0.5 flex-shrink-0 text-primary-600" />
                    <div>
                      <p className="text-sm font-medium">Karnataka Traffic Rules</p>
                      <p className="text-xs text-dark-600 dark:text-dark-400">Karnataka Government</p>
                    </div>
                  </div>
                </div>

                <Button variant="secondary" className="w-full justify-center">
                  View All References
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Features */}
          <Card>
            <CardHeader title="AI Capabilities" />
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-block h-2 w-2 rounded-full bg-success-600" />
                  <span>Multi-language support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-block h-2 w-2 rounded-full bg-success-600" />
                  <span>Document OCR</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-block h-2 w-2 rounded-full bg-success-600" />
                  <span>Real-time citations</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-block h-2 w-2 rounded-full bg-success-600" />
                  <span>Voice input/output</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
