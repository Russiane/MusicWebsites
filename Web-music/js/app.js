
// next, previous of popular songs 
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

// next, previous of popular artists 
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let pop_art = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    pop_art.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    pop_art.scrollLeft -= 330;
});

// PLAY MUSIC
const music = new Audio('audio/1.mp3')
// music.play();

// Song Data
const songs = [
    {
        id: "1",
        songName: `14.? Playlist<br><div class="subtitle">Nguyenn</div>`,
        poster: "img/1.jpg",
    },
    {
        id: "2",
        songName: `Lâu phai #2<br><div class="subtitle">Kaidinh</div>`,
        poster: "img/2.jpg",
    },
    {
        id: "3",
        songName: `Old stories 2022 Playlist<br><div class="subtitle">SIVAN`,
        poster: "img/3.jpg",
    },
    {
        id: "4",
        songName: `Nếu biết đó là lần cuối<br><div class="subtitle">Đức Trường</div>`,
        poster: "img/4.jpg",
    },
    {
        id: "5",
        songName: `Rồi ta sẽ ngắm pháo hoa cùng nhau<br><div class="subtitle">O.lew</div>`,
        poster: "img/5.jpg",
    },
    {
        id: "6",
        songName: `Ngày em đẹp nhất<br><div class="subtitle">Tama x Will M</div>`,
        poster: "img/6.jpg",
    },
    {
        id: "7",
        songName: `Sau khi chia tay ai cũng khác<br><div class="subtitle">T.R.I</div>`,
        poster: "img/7.jpg",
    },
    {
        id: "8",
        songName: `Không chờ đợi nữa<br><div class="subtitle">Khải ft. LilGee, Filmies</div>`,
        poster: "img/8.jpg",
    },
    {
        id: "9",
        songName: `Anh làm tất cả vì...<br><div class="subtitle">Nguyên ft. Seth</div>`,
        poster: "img/9.jpg",
    },
    {
        id: "10",
        songName: `Ôm em lần cuối<br><div class="subtitle">NIT x Sing</div>`,
        poster: "img/10.jpg",
    },
    {
        id: "11",
        songName: `Ánh sao và bầu trời<br><div class="subtitle">T.R.I</div>`,
        poster: "img/11.jpg",
    },
    {
        id: "12",
        songName: `Anh đã từ bỏ rồi đấy<br><div class="subtitle">Nguyenn ft. Aric</div>`,
        poster: "img/12.jpg",
    },
    {
        id: "13",
        songName: `Hẹn em ở lần yêu thứ 2<br><div class="subtitle">Nguyenn ft. Đặng Tuấn Vũ</div>`,
        poster: "img/13.jpg",
    },
    {
        id: "14",
        songName: `Vaicaunoicokhiennguoithaydoi<br><div class="subtitle">GREY D x Tlinh</div>`,
        poster: "img/14.jpg",
    },
    {
        id: "15",
        songName: `Để tôi ôm em bằng giai điệu này<br><div class="subtitle">Kaidinh x Min x Grey D</div>`,
        poster: "img/15.jpg",
    },
    {
        id: "16",
        songName: `Không thể say<br><div class="subtitle">HIEUTHUHAI</div>`,
        poster: "img/16.jpg",
    },


    {
        id: "17",
        songName: `Mưa tháng sáu<br><div class="subtitle">Văn Mai Hương</div>`,
        poster: "img/17.jpg",
    },
    {
        id: "18",
        songName: `Từng là của nhau<br><div class="subtitle">Bảo Anh ft. Táo</div>`,
        poster: "img/18.jpg",
    },
    {
        id: "19",
        songName: `Cô đơn trên sofa<br><div class="subtitle">Trung Quân live cover</div>`,
        poster: "img/19.jpg",
    },
    {
        id: "20",
        songName: `Chuyện của chúng ta sau này<br><div class="subtitle">Hải Đăng Doo ft. Erik</div>`,
        poster: "img/20.jpg",
    },
    {
        id: "21",
        songName: `Chưa quên người yêu cũ<br><div class="subtitle">Hà Nhi x Hứa Kim Tuyền</div>`,
        poster: "img/21.jpg",
    },
    {
        id: "22",
        songName: `Anh Chưa Thương Em Đến Vậy Đâu<br><div class="subtitle">Laydy Mây - Myra Trần</div>`,
        poster: "img/22.jpg",
    },
    {
        id: "23",
        songName: `Hơn em chỗ nào<br><div class="subtitle">Thùy Chi x Viuss</div>`,
        poster: "img/23.jpg",
    },
    {
        id: "24",
        songName: `Em đồng ý (I DO)<br><div class="subtitle">Đức Phúc x 911 x Khắc Hưng</div>`,
        poster: "img/24.jpg",
    },
    {
        id: "25",
        songName: `Ngày đầu tiên<br><div class="subtitle">Đức Phúc</div>`,
        poster: "img/25.jpg",
    },
    {
        id: "26",
        songName: `Lâu lâu nhắc lại<br><div class="subtitle">Hà Nhi ft Khói</div>`,
        poster: "img/26.jpg",
    },
    {
        id: "27",
        songName: `Dừng yêu<br><div class="subtitle">Myra Trần x Negav x Nemo</div>`,
        poster: "img/27.jpg",
    },
    {
        id: "28",
        songName: `Tình yêu đến sau<br><div class="subtitle">Myra Trần x Đức Phúc</div>`,
        poster: "img/28.jpg",
    },
    
    
    {
        id: "29",
        songName: `Nothin' on me<br><div class="subtitle">Leah Marie Perez</div>`,
        poster: "img/29.jpg",
    },
    {
        id: "30",
        songName: `Cupid<br><div class="subtitle">FIFTY FIFTY</div>`,
        poster: "img/30.jpg",
    },
    {
        id: "31",
        songName: `Ôm Trọn Nỗi Nhớ<br><div class="subtitle">RUM</div>`,
        poster: "img/31.jpg",
    },
    {
        id: "32",
        songName: `Anh sẽ đón em<br><div class="subtitle">Trang x Nguyên</div>`,
        poster: "img/32.jpg",
    },
    {
        id: "33",
        songName: `Bật tình yêu lên<br><div class="subtitle">Hòa Minzy x Tăng Duy Tân</div>`,
        poster: "img/33.jpg",
    },
    {
        id: "34",
        songName: `Có đâu ai ngờ<br><div class="subtitle">CẦM</div>`,
        poster: "img/34.jpg",
    },
    {
        id: "35",
        songName: `Em Là Nhất<br><div class="subtitle">kis x Hoàng KayLee x Yahy</div>`,
        poster: "img/35.jpg",
    },
    {
        id: "36",
        songName: `Thích anh rồi đấy<br><div class="subtitle">HANNIE</div>`,
        poster: "img/36.jpg",
    },
    {
        id: "37",
        songName: `Lạc Vào Trong Mơ<br><div class="subtitle">Simon C X Wuy</div>`,
        poster: "img/37.jpg",
    },
    {
        id: "38",
        songName: `Em Thích<br><div class="subtitle">SEAN</div>`,
        poster: "img/38.jpg",
    },
    {
        id: "39",
        songName: `Iu là đây<br><div class="subtitle">SEAN x MUỘII x ANFANG</div>`,
        poster: "img/39.jpg",
    },
    {
        id: "40",
        songName: `Tình Ca Tình Ta<br><div class="subtitle">kis</div>`,
        poster: "img/40.jpg",
    },


    {
        id: "41",
        songName: `Sao Cha Không<br><div class="subtitle">Phan Mạnh Quỳnh</div>`,
        poster: "img/41.jpg",
    },
    {
        id: "42",
        songName: `Tôi Thương Ba<br><div class="subtitle">Văn Mai Hương x Hồ Trung Dũng</div>`,
        poster: "img/42.jpg",
    },
    {
        id: "43",
        songName: `Ước Mơ Của Mẹ<br><div class="subtitle">CARA x CM1X</div>`,
        poster: "img/43.jpg",
    },
    {
        id: "44",
        songName: `Điều Cha Chưa Nói<br><div class="subtitle">Ali Hoàng Dương</div>`,
        poster: "img/44.jpg",
    },
    {
        id: "45",
        songName: `Cha Và Con<br><div class="subtitle">Anh Tú</div>`,
        poster: "img/45.jpg",
    },
    {
        id: "46",
        songName: `Mang Tiền Về Cho Mẹ<br><div class="subtitle">Đen ft. Nguyên Thảo</div>`,
        poster: "img/46.jpg",
    },
    {
        id: "47",
        songName: `Đến Giờ Cơm<br><div class="subtitle">Ái Phương</div>`,
        poster: "img/47.jpg",
    },
    {
        id: "48",
        songName: `Nếu một mai tôi bay lên trời<br><div class="subtitle">Hứa Kim Tuyền x Trúc Nhân</div>`,
        poster: "img/48.jpg",
    },
    {
        id: "49",
        songName: `Khi Em Lớn<br><div class="subtitle">Orange x Hoàng Dũng</div>`,
        poster: "img/49.jpg",
    },
    {
        id: "50",
        songName: `Muốn Khóc Thật To<br><div class="subtitle">Trúc Nhân</div>`,
        poster: "img/50.jpg",
    },


];



// get data from songs array
const songItems = document.getElementsByClassName('songItem');
Array.from(songItems).forEach((e, i) => {
    if (i < songs.length) {
        e.getElementsByTagName('img')[0].src = songs[i].poster;
        e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    }
});


// change play/pause button and active wave of master play when click pause/play button
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

// function change background and button when play song
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgba(107, 107, 107, .0)';
    })
}

// ******************************************* 
//  Update audio, img and song name when play song 
//  Change background and button play/pause and active wave
// Download button
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active1');

        download_music.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach((elss) => {
            let { songName } = elss;
            title.innerHTML = songName;

            songName = songName.replace(/<br>/g, ' - ');
            songName = songName.replace(/<div class="subtitle">/g, '');
            songName = songName.replace(/<\/div[^>]*>/g, '');
            songName = songName.trim();

            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = 'rgba(107, 107, 107, 0.2)';

        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');

    })
});

// ************************************************
//  Time and music progress bar 
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

// ****************************************************
// Volume progress bar
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

// **********************************************
//  back button 
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(107, 107, 107, 0.2)";

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
})

// next button 
next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(107, 107, 107, 0.2)";

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
});



// shuffle, repeat button
let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');

            shuffle.innerHTML = 'repeat';
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');

            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');

            shuffle.innerHTML = 'next';
            break;
        default:
            break;
    }
});

// when the song is end => next or repeat or shuffle
// music.addEventListener('ended', () => {
//     if (index == songs.length) {
//         index = 1;
//     } else {
//         index++;
//     }

//     music.src = `audio/${index}.mp3`;
//     poster_master_play.src = `img/${index}.jpg`;
//     music.play();
//     masterPlay.classList.remove('bi-play-fill');
//     masterPlay.classList.add('bi-pause-fill');
//     wave.classList.add('active1');

//     let songTitles = songs.filter((els) => {
//         return els.id == index;
//     });

//     songTitles.forEach((elss) => {
//         let { songName } = elss;
//         title.innerHTML = songName;
//     });

//     makeAllBackground();
//     Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(107, 107, 107, 0.2)";

//     makeAllPlays();
//     el.target.classList.add('bi-pause-circle-fill');
//     el.target.classList.remove('bi-play-circle-fill');
// });

// function next_music
const next_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;

        songName = songName.replace(/<br>/g, ' - ');
        songName = songName.replace(/<div class="subtitle">/g, '');
        songName = songName.replace(/<\/div[^>]*>/g, '');
        songName = songName.trim();

        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(107, 107, 107, 0.2)";

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
};


// function repeat_music
const repeat_music = () => {
    index;

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;

        songName = songName.replace(/<br>/g, ' - ');
        songName = songName.replace(/<div class="subtitle">/g, '');
        songName = songName.replace(/<\/div[^>]*>/g, '');
        songName = songName.trim();

        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(107, 107, 107, 0.2)";

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
};

// function repeat_music
const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random()*songs.length)+1);
    }

    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active1');

    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach((elss) => {
        let { songName } = elss;
        title.innerHTML = songName;

        songName = songName.replace(/<br>/g, ' - ');
        songName = songName.replace(/<div class="subtitle">/g, '');
        songName = songName.replace(/<\/div[^>]*>/g, '');
        songName = songName.trim();

        download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgba(107, 107, 107, 0.2)";

    makeAllPlays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
};

music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
                repeat_music();
            break;
        case 'next':
                next_music();
            break;
        case 'random':
                random_music();
            break;
    
        default:
            break;
    }
})
