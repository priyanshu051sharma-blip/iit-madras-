'use client'

import React, { useState } from 'react'
import {
  AlertTriangle,
  Phone,
  Navigation,
  Share2,
  Heart,
  MapPin,
  Clock,
  Shield,
  Zap,
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/Card'
import { Button } from '@/components/Button'
import { Badge } from '@/components/Badge'

export default function EmergencySosPage() {
  const [activeEmergency, setActiveEmergency] = useState<string | null>(null)
  const [locationShared, setLocationShared] = useState(false)

  const emergencyServices = [
    {
      id: 'medical',
      title: 'Medical Emergency',
      icon: '🚑',
      color: 'danger',
      description: 'Accidents, injuries, health issues',
      phone: '102',
      responseTime: '5-10 mins',
    },
    {
      id: 'police',
      title: 'Police Assistance',
      icon: '🚔',
      color: 'primary',
      description: 'Traffic accidents, crimes, disputes',
      phone: '100',
      responseTime: '5-15 mins',
    },
    {
      id: 'mechanical',
      title: 'Roadside Assistance',
      icon: '🔧',
      color: 'warning',
      description: 'Vehicle breakdown, flat tire, fuel',
      phone: '+91-1234-567890',
      responseTime: '10-20 mins',
    },
    {
      id: 'legal',
      title: 'Legal Assistance',
      icon: '⚖️',
      color: 'neutral',
      description: 'Legal advice, disputes, documentation',
      phone: '+91-9876-543210',
      responseTime: '30 mins',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Emergency SOS</h1>
        <p className="mt-1 text-dark-600 dark:text-dark-400">
          One-click access to emergency services and immediate assistance
        </p>
      </div>

      {/* Big Red SOS Button */}
      <div className="flex justify-center py-8">
        <button
          onClick={() => setActiveEmergency(activeEmergency ? null : 'sos')}
          className={`relative h-40 w-40 rounded-full font-bold text-white transition-all duration-300 shadow-2xl ${
            activeEmergency === 'sos'
              ? 'animate-pulse bg-danger-700'
              : 'bg-gradient-to-br from-danger-600 to-danger-700 hover:shadow-2xl hover:scale-105'
          }`}
        >
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <AlertTriangle size={48} />
            <span className="text-2xl font-bold">SOS</span>
          </span>
        </button>
      </div>

      {activeEmergency === 'sos' && (
        <Card className="border-2 border-danger-600 bg-danger-50 dark:bg-dark-800">
          <CardContent className="space-y-4 py-6">
            <div className="flex items-center gap-2 text-danger-700 dark:text-danger-300">
              <AlertTriangle size={20} />
              <span className="font-semibold">Emergency Mode Activated</span>
            </div>
            <p className="text-sm">
              Your location is being tracked. Emergency services have been notified of your situation.
            </p>
            <div className="flex gap-2">
              <Button
                variant="danger"
                onClick={() => setLocationShared(true)}
                className="flex-1"
              >
                <Navigation size={16} />
                Share Location
              </Button>
              <Button
                variant="danger"
                className="flex-1"
              >
                <Phone size={16} />
                Call Police
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Emergency Services Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {emergencyServices.map((service) => (
          <Card key={service.id} interactive>
            <CardContent className="py-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="text-xs text-dark-600 dark:text-dark-400">
                    {service.description}
                  </p>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={14} className="text-primary-600" />
                      <span className="font-mono font-semibold">{service.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={14} className="text-warning-600" />
                      <span>{service.responseTime}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 gap-1"
                      icon={<Phone size={14} />}
                    >
                      Call Now
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="gap-1"
                      icon={<Share2 size={14} />}
                    >
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Live Status */}
      {locationShared && (
        <Card className="bg-success-50 dark:bg-dark-700">
          <CardHeader title="Live Status" />
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Location Sharing</span>
                <Badge variant="success">Active</Badge>
              </div>
              <p className="text-xs text-dark-600 dark:text-dark-400">
                Bangalore, Karnataka • Latitude: 12.9716 | Longitude: 77.5946
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">SOS Contacts Notified</span>
                <Badge variant="success">3 contacts</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-dark-600 dark:text-dark-400">✓ Emergency Services</p>
                <p className="text-xs text-dark-600 dark:text-dark-400">✓ Family Members</p>
                <p className="text-xs text-dark-600 dark:text-dark-400">✓ Insurance Company</p>
              </div>
            </div>

            <Button
              variant="danger"
              onClick={() => setLocationShared(false)}
              className="w-full"
            >
              Stop Emergency Alert
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Nearby Resources */}
      <Card>
        <CardHeader
          title="Nearby Facilities"
          subtitle="Hospitals, police stations, and services near you"
        />
        <CardContent>
          <div className="space-y-3">
            {[
              {
                name: 'Apollo Hospital',
                type: 'Medical',
                distance: '2.3 km',
                rating: '4.8',
              },
              {
                name: 'Silk Board Police Station',
                type: 'Police',
                distance: '1.8 km',
                rating: '4.5',
              },
              {
                name: 'City Roadside Assistance',
                type: 'Mechanical',
                distance: '3.1 km',
                rating: '4.6',
              },
              {
                name: 'Legal Aid Center',
                type: 'Legal',
                distance: '4.2 km',
                rating: '4.4',
              },
            ].map((facility, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-dark-200 p-3 dark:border-dark-700"
              >
                <div>
                  <p className="font-medium">{facility.name}</p>
                  <div className="mt-1 flex gap-2 text-xs text-dark-600 dark:text-dark-400">
                    <span>{facility.type}</span>
                    <span>•</span>
                    <span>{facility.distance}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">{facility.rating}</span>
                    <span className="text-sm">⭐</span>
                  </div>
                  <Button size="sm" variant="secondary">
                    Navigate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Emergency Tips */}
      <Card>
        <CardHeader
          title="Emergency Safety Tips"
          subtitle="What to do in case of a road emergency"
        />
        <CardContent>
          <div className="space-y-3">
            {[
              'Move to safety if possible and turn on hazard lights',
              'Call emergency services immediately - provide your exact location',
              'Switch on emergency beacon/warning flashers',
              'Keep door locked if not leaving the vehicle',
              'Document the scene with photos/videos if safe',
              'Exchange contact and insurance details with other drivers',
              'Get witness contact details',
              'Contact your insurance company within 24 hours',
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 text-sm">
                <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-warning-600" />
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
