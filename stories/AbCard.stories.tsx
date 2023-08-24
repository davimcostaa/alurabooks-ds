import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbCard } from '../src/components/AbCard'


export default {
    title: 'Components/ABCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>

export const CardTemplate: ComponentStory<typeof AbCard> = () => <AbCard>
    <h1>Card</h1>
</AbCard>
