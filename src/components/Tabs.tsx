// filepath: /Users/premmann/Next/cpl/src/components/Tabs.tsx
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface TabsProps {
    users: Array<{ id: number; email: string }>;
    posts: Array<{ id: number; title: string; content: string | null; authorId: number; createdAt: Date; updatedAt: Date; published: boolean }>;
}

const Tabs: React.FC<TabsProps> = ({ users, posts }) => {
    const [activeTab, setActiveTab] = useState('posts');

    return (
        <div className="tabs w-full">
            <div className="tab-list flex justify-center">
                <Button
                    className={`tab ${activeTab === 'posts' ? 'active bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setActiveTab('posts')}
                >
                    Posts
                </Button>
                <Button
                    className={`tab ${activeTab === 'users' ? 'active bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => setActiveTab('users')}
                >
                    Users
                </Button>
            </div>
            <div className="tab-content">
                {activeTab === 'posts' && (
                    <div>
                        <h2 className='self-center'>Posts</h2>
                        <ul className='flex flex-col gap-1'>
                            {posts.map((post) => (
                                <li key={post.id}>
                                    {post.title}: {post.content}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {activeTab === 'users' && (
                    <div>
                        <h2 className='self-center'>Users</h2>
                        <ul>
                            {users.map((user) => (
                                <li key={user.id}>
                                    {user.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;