import React from 'react'
import img1 from '../assets/images/santa.jpg'
import img2 from '../assets/images/Lock.svg'
import img3 from '../assets/images/userlogo.png'
import img4 from '../assets/images/Heart.svg'
import img5 from '../assets/images/Voice.png'
import img6 from '../assets/images/Lockwhite.svg'
import video from '../assets/videos/_import_60746195038a67.00479292_FPpreview.mp4'

function MainContainer() {

    

  return (
    <div className='UserHead row bg-white '>
        <div className='col-12 col-lg-3 pe-0 overflow-hidden'>
            <div className='UserColumn py-4 px-3'>
                <div className='d-flex justify-content-lg-center justify-content-between align-items-center'>
                    <div>
                        <h1 className='text-center mb-1'>Welcome</h1>
                        <h3 className='text-center'>Arturo Cruz</h3>
                    </div>
                    <div className='d-lg-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10H7" stroke="#021101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 6H3" stroke="#021101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 14H3" stroke="#021101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21 18H7" stroke="#021101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className='d-flex mt-3 justify-content-center'>
                    <img src={img1} className='d-none UserView  rounded-pill' alt="" />
                
                <video src={video} autoPlay loop muted playsInline className='rounded-pill UserView'  >
                </video>
                </div>
                <div className='TimeRemain text-center d-flex flex-column align-items-center'>
                    <h5 className='text-center mt-2'>Remaining time</h5>
                    <h6 className='text-center px-4 py-2 bg-white '>12:37</h6>
                </div>
                <div className='lockScreen  px-2 py-4 bg-white '>
                    <h2 className='text-center mb-1'>Lock the screen for your child</h2>
                    <h4 className='text-center'>Use the code to unlock</h4>
                    <div className='d-flex justify-content-center gap-2 mt-3'>
                        <input type="text" className='lockinput text-center bg-white' />
                        <input type="text" className='lockinput text-center bg-white' />
                        <input type="text" className='lockinput text-center bg-white' />
                        <input type="text" className='lockinput text-center bg-white' />
                    </div>
                    <div className='d-flex mt-4 me-0 me-lg-3 align-items-center justify-content-center justify-content-lg-end'>
                        <h3 className='mb-0 me-2'>Lock Screen</h3>
                        <img src={img2}  />
                    </div>
                </div>
            </div>
        </div>

        <div className='col-12 col-lg-9 px-0 position-relative'>
            <header className='Header d-none  d-lg-flex justify-content-between px-3 py-3'>
                <div className='d-flex align-items-center'>
                    <img src={img3} className='headeruserimg me-2' alt="" />
                    <div>
                        <div className='UserName'>Arturo Cruz<img src={img4} className='userNameIcon ms-2' alt="" />
                        </div>
                        <div className='OnlineStatus d-flex align-items-center'>
                            <div className='OnlineIcon'></div>
                            <h3 className='mb-0 ms-1'>Online</h3>
                        </div>
                    </div>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <div className='Nav-item d-flex align-items-center justify-content-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                            <path d="M15.2998 5.97984L18.5928 3.28484C19.4088 2.61684 20.6328 3.19884 20.6318 4.25184L20.6198 11.6008C20.6188 12.6538 19.3938 13.2308 18.5798 12.5628L15.2998 9.86784" stroke="#128C7E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2966 11.5383C15.3775 13.3704 13.8989 14.9196 11.9944 14.9975C11.8541 15.0034 5.01507 14.9896 5.01507 14.9896C3.11972 15.1335 1.46091 13.7715 1.31141 11.9463C1.30014 11.8103 1.30322 4.47219 1.30322 4.47219C1.21925 2.63815 2.6958 1.08499 4.60139 1.00418C4.74372 0.997278 11.5735 1.01009 11.5735 1.01009C13.4781 0.868176 15.142 2.24001 15.2895 4.07405C15.2997 4.2061 15.2966 11.5383 15.2966 11.5383Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect width="48" height="48" rx="8" fill="#DCEFED"/>
                            <path d="M9.5 31.018V31.5415C9.49998 31.846 9.55994 32.1474 9.67644 32.4287C9.79293 32.71 9.96369 32.9656 10.179 33.1809C10.3942 33.3962 10.6498 33.567 10.9311 33.6835C11.2124 33.8 11.5138 33.86 11.8183 33.86H36.1814C36.7963 33.86 37.386 33.6157 37.8209 33.1809C38.2557 32.7461 38.5 32.1564 38.5 31.5415V31.018H9.5Z" fill="#128C7E"/>
                            <path d="M36.1784 15.8799C36.1783 15.4185 35.995 14.9759 35.6687 14.6496C35.3424 14.3233 34.8998 14.14 34.4384 14.14H13.5581C13.3296 14.14 13.1034 14.185 12.8923 14.2725C12.6812 14.3599 12.4894 14.4881 12.3279 14.6497C12.1663 14.8112 12.0382 15.003 11.9507 15.2141C11.8633 15.4252 11.8183 15.6515 11.8184 15.8799V29.742H36.1784V15.8799ZM29.2184 22.0048C29.2184 22.9649 28.96 23.9073 28.4703 24.7331C27.9806 25.559 27.2777 26.2378 26.4353 26.6984L23.9984 28.0311L21.5611 26.6983C20.7188 26.2377 20.016 25.5588 19.5264 24.733C19.0367 23.9072 18.7784 22.9649 18.7784 22.0048V18.0962L23.9984 16.4311L29.2184 18.0962V22.0048Z" fill="#128C7E"/>
                            <path d="M21.7535 22.0196C21.6943 21.9602 21.624 21.913 21.5466 21.8808C21.4692 21.8486 21.3862 21.832 21.3023 21.8319C21.2185 21.8318 21.1354 21.8483 21.058 21.8803C20.9805 21.9124 20.9101 21.9594 20.8508 22.0187C20.7915 22.078 20.7445 22.1483 20.7125 22.2258C20.6804 22.3033 20.664 22.3863 20.6641 22.4702C20.6641 22.554 20.6808 22.637 20.713 22.7144C20.7452 22.7918 20.7923 22.8621 20.8517 22.9213L22.4915 24.561C22.5507 24.6203 22.6211 24.6673 22.6985 24.6994C22.7759 24.7315 22.8588 24.748 22.9426 24.748C23.0264 24.748 23.1094 24.7315 23.1868 24.6994C23.2642 24.6673 23.3345 24.6203 23.3938 24.561L27.1519 20.8024C27.2715 20.6826 27.3386 20.5203 27.3385 20.3511C27.3384 20.1819 27.271 20.0197 27.1513 19.9001C27.0316 19.7805 26.8692 19.7134 26.7 19.7135C26.5308 19.7136 26.3686 19.7809 26.249 19.9007L22.9424 23.2079L21.7535 22.0196Z" fill="#128C7E"/>
                        </svg>
                    </div>
                </div>
            </header>
            <div className='chatSection px-3 px-lg-5'>
                <div className='d-flex messageSection h-100 flex-column justify-content-between'>
                    <div className='d-flex'>
                        <div className='m-auto mt-3 mb-3 securityMessge d-flex align-items-center px-2 py-3 '>
                            <img src={img6} alt="" />
                            <p className='ms-2 mb-0 text-white'>Messages are end-to-end encrypted. No one outside of this chat, not even ChatterSanta can read or listen to them.</p>
                        </div>
                    </div>
                    <div className=''>
                        <ul className='ps-0'>
                            <li className="d-flex justify-content-end ms-3">
                                <div>
                                    <div className="chatBox ">
                                        <h3 className=" mb-0 text-end">hi,Rahul....hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.</h3>
                                    </div>
                                    <p className="messge pt-1 font_8 font_400 mb-0 text-end">Now</p>
                                </div>
                            </li>
                            <li className="d-flex  ms-3 mb-1">
                                <div>
                                    <div className="chatBox2 ">
                                        <h3 className=" mb-0 text-end">hi,Rahul....hi,Rahu,</h3>
                                    </div>
                                    <p className="messge pt-1 font_8 font_400 mb-0 text-start">1 minute ago</p>
                                </div>
                            </li>
                            <li className="d-flex justify-content-end ms-3">
                                <div>
                                    <div className="chatBox ">
                                        <h3 className=" mb-0 text-end">hi,Rahul....hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.</h3>
                                    </div>
                                    <p className="messge pt-1 font_8 font_400 mb-0 text-end">Now</p>
                                </div>
                            </li>
                            <li className="d-flex  ms-3 mb-1">
                                <div>
                                    <div className="chatBox2 ">
                                        <h3 className=" mb-0 text-end">hi,Rahul....hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,</h3>
                                    </div>
                                    <p className="messge pt-1 font_8 font_400 mb-0 text-start">1 minute ago</p>
                                </div>
                            </li>
                            <li className="d-flex justify-content-end ms-3">
                                <div>
                                    <div className="chatBox ">
                                        <h3 className=" mb-0 text-end">hi,Rahul....hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.</h3>
                                    </div>
                                    <p className="messge pt-1 font_8 font_400 mb-0 text-end">Now</p>
                                </div>
                            </li>
                            <li className="d-flex  ms-3 mb-1">
                                <div>
                                    <div className="chatBox2 ">
                                        <h3 className=" mb-0 text-end">hi,Rahul....hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,Rahul.hi,</h3>
                                    </div>
                                    <p className="messge pt-1 font_8 font_400 mb-0 text-start">1 minute ago</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='MessageSendSection px-4 px-lg-4  d-flex justify-content-end align-items-center w-100 px-2 py-3 position-absolute bottom-0'>
                <div className='pe-3 pe-lg-3 w-100'>
                    <input className='text-black px-3 w-100  bg-white' placeholder='Say Something to Santa...' type="text" />
                    <div>
                    <div className='d-none'>
                    <i class="fas fa-trash deleteIcon me-2"></i>   
                        <span className='Voicetimer'>0.01</span>
                    </div>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <i class="fas fa-microphone voiceIcon"></i>
                    <i class="far fa-pause-circle pauseIcon d-none"></i>
                    <i className='d-none fas fa-location-arrow send_message_icon ms-2'></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainContainer