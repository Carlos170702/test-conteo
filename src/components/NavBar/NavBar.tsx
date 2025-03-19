import { navbarHeight } from '@/common/variables';
import Image from 'next/image';

const NavBar = () => {
	return (
		<div className={`bg-white h-[${navbarHeight}px]`}>
			<div className='flex justify-between items-center'>
				<div>
					<Image
						src="/logo.png"
						alt="Logo"
						width={150}
						height={60}
						className="object-contain"
					/>
				</div>

				<div className='flex items-center gap-2'>
					<div className='w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-medium text-sm'>
						C
					</div>
					<span className='text-sm text-gray-700'>Carlos</span>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
