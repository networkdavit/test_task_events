<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventsTableSeeder extends Seeder
{
    public function run()
    {
        $events = [
            [
                'title' => 'Conference on Technology Trends',
                'description' => 'Join us for a conference discussing the latest trends in technology.',
                'event_datetime' => '2023-12-15 09:00:00',
                'location' => 'Tech Hub Conference Center',
            ],
            [
                'title' => 'Art Exhibition - Modern Perspectives',
                'description' => 'Explore modern art from various perspectives in this unique exhibition.',
                'event_datetime' => '2023-12-18 18:30:00',
                'location' => 'Contemporary Art Gallery',
            ],
            [
                'title' => 'Community Yoga and Meditation',
                'description' => 'Relax your mind and body with our community yoga and meditation session.',
                'event_datetime' => '2023-12-20 17:00:00',
                'location' => 'Peaceful Park',
            ]
        ];

        foreach ($events as $event) {
            DB::table('events')->insert([
                'title' => $event['title'],
                'description' => $event['description'],
                'event_datetime' => $event['event_datetime'],
                'location' => $event['location'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
