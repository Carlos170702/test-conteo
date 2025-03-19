import { sidebarWidth } from '@/common/variables';
import { CiShoppingCart } from 'react-icons/ci';
import { IoAddCircleOutline } from 'react-icons/io5';
import SidebarItem from './SidebarItem';
import { GrHomeRounded } from 'react-icons/gr';

const SidebarItems = [
	{
		icon: <GrHomeRounded size={20} />,
		text: 'Home',
		href: '/',
	},
	{
		icon: <CiShoppingCart size={20} />,
		text: 'Productos',
		href: '/products',
	},
	{
		icon: <IoAddCircleOutline size={20} />,
		text: 'Add Product',
		href: '/addProduct',
	},
]

const Sidebar = ({ }) => {
	return (
		<div className={`bg-white h-full shadow-md p-4 w-[${sidebarWidth}px]`}>
			<div className='flex flex-col gap-6'>
				<h3 className='font-medium text-gray-800 px-3 mb-2'>Menú Principal</h3>
				<nav className='flex flex-col gap-2'>
					{SidebarItems.map((item) => (
						<SidebarItem key={item.href} {...item} />
					))}
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
