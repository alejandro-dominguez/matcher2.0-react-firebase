import {
    SideBar,
    SwiperCard,
    NoMoreMatches,
    Recommended,
    MobileNav,
    MobileFooter,
    FullScreenLoader
} from '../components/';
import { ErrorPage } from '../pages/';
import useProfile from '../hooks/useProfile';
import useProfiles from '../hooks/useProfiles';

const Feed = () => {
    const { loadingUser, userError, userProfile } = useProfile()
    const [ loadingProfiles, profilesError, profiles ] = useProfiles()

    return (
        <>
        {loadingProfiles || loadingUser ? <FullScreenLoader />
        : profiles && userProfile && (!profilesError || !userError) ? <div className='xlContainer'>
            <div className="pageGradientBg flex flex-col-reverse md:flex md:flex-row items-center
            justify-center h-screen w-full relative overflow-hidden">
                <div className="sideBarContainer md:block hidden">
                    <SideBar userProfile={userProfile} />
                </div>
                <div className='md:hidden block'>
                    <MobileFooter userProfile={userProfile} />
                </div>
                <main className="swiperContainer flex flex-col items-center justify-center relative">
                    {profiles ? profiles.map((profile, i) => 
                    <SwiperCard profile={profile} profiles={profiles} key={i} />)
                    : null}
                    {profiles ? <NoMoreMatches />
                    : null}
                </main>
                <div className="sideBarContainer md:block bg-[#FF929D] hidden">
                    <Recommended />
                </div>
                <div className='md:hidden block absolute top-0 w-screen'>
                    <MobileNav />
                </div>
            </div>
        </div>
        : <ErrorPage />}
        </>
    )
}

export default Feed;
