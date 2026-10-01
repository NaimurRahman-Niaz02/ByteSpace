/**
 * ByteSpace Testimonials Data
 * Source of truth: design/landing-page/design-context.md (Figma #34:1175, #34:1182)
 */

import avatarSarahImg from '../assets/images/avatar-sarah.png';
import avatarJamesImg from '../assets/images/avatar-james.png';
import avatarAlexImg from '../assets/images/avatar-alex.png';
import starIcon from '../assets/icons/star-icon.svg';

export const testimonialsHeaderData = {
  title: 'Discover What Our Community Is Saying',
  description:
    'At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.',
};

export const testimonialsData = [
  {
    id: 'testimonial-sarah',
    nodeId: '34:1184',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: avatarSarahImg,
    starIcon: starIcon,
    rating: 5,
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    id: 'testimonial-james',
    nodeId: '34:1189',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: avatarJamesImg,
    starIcon: starIcon,
    rating: 5,
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: 'testimonial-alex',
    nodeId: '34:1195',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: avatarAlexImg,
    starIcon: starIcon,
    rating: 5,
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];
