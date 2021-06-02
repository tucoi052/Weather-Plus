import React, { Component } from 'react';

import styled from 'styled-components/native';

import { convertWidth } from 'utils/convertSize';

const TextLaStyled = styled.Text`
color:#3CAA6D;
font-family:la-solid-900;
font-size: ${convertWidth(18)}`;
const TextStyled = styled.Text`
color:#3CAA6D;
font-family:fontawesome;
font-size: ${convertWidth(18)}`;

export interface UIProps {
    color?: any,
    size?: number,
    hex?: string
}

export const UserFriends = (props: UIProps) => {
    return (<TextStyled style={{ color: props.color ? props.color : '#31383F' }}>
        &#xf0c0;
    </TextStyled>)
}
export const Remove = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf00d;</TextStyled>)
}
export const UserShield = (props: UIProps) => {

    return (<TextStyled style={{ color: props.color ? props.color : '#31383F' }}>&#xf505;</TextStyled>)
}
export const UserAstronout = (props: UIProps) => {

    return (<TextStyled style={{ color: props.color ? props.color : '#31383F' }}>&#xf4fb;</TextStyled>)
}
export const UserPlus = (props: UIProps) => {

    return (<TextStyled style={{ color: props.color ? props.color : '#31383F' }}>  &#xf234;</TextStyled>)
}
export const StreetView = (props: UIProps) => {

    return (<TextStyled style={{ color: props.color ? props.color : '#31383F' }}>&#xf21d;</TextStyled>)
}
export const AddCircle = (props: UIProps) => {

    return (<TextStyled style={{ color: props.color ? props.color : '#31383F' }} >&#xf055;</TextStyled>)
}
export const Discover = (props: UIProps) => {

    return (<TextStyled style={{ color: props.color ? props.color : '#31383F' }} >&#xf14e;</TextStyled>)
}

export const Add = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: 25 }}>&#xf055;</TextStyled>)

}
export const Search = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size ? size : 22 }}>&#xf002;</TextStyled>)
}
export const FilterSearch = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: 25 }}>&#xf0c9;</TextStyled>)
}
export const Back = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size ? size : 22 }} >&#xf30a;</TextStyled>)

}
export const Home = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white' }}>&#xf015;</TextStyled>)
}
export const Notification = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size ? size : 22 }}>&#xf0f3;</TextStyled>)
}
export const MenuSetting = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white' }}>&#xf0c9;</TextStyled>)
}

export const Setting = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white' }}>&#xf013;</TextStyled>)
}
export const Address = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf041;</TextStyled>)

}
export const Voice = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf130;</TextStyled>)
}
export const Camera = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf030;</TextStyled>)

}
export const Play = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf04b;</TextStyled>)

}
export const Pause = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf04c;</TextStyled>)

}

export const Eye = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#98A9BC', fontSize: size }}>&#xf06e;</TextStyled>)

}
export const EyeSlash = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#98A9BC', fontSize: size }}>&#xf070;</TextStyled>)

}
export const ArrowRight = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }}>&#xf105;</TextStyled>)

}
export const ArrowDown = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size ? size : 27 }}>&#xf107;</TextStyled>)

}
export const ArrowDoubleRight = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf101;</TextStyled>)

}
export const Tick = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#3FAD6E', fontSize: size }} >&#xf058;</TextStyled>)

}
export const Close = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf00d;</TextStyled>)
}
export const Pencil = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf303;</TextStyled>)

}
export const Signal = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#778CA2', fontSize: size }} >&#xf012;</TextStyled>)

}
export const Send = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf1d8;</TextStyled>)

}
export const Clear = (props: UIProps) => {

    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#314559', fontSize: size }} >&#xf00d;</TextStyled>)
}

export const NextStep = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf101;</TextStyled>)
}

export const Notifi = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf0a1;</TextStyled>)
}
export const Folder = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf15c;</TextStyled>)
}
export const Edit = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf044;</TextStyled>)
}
export const Trash = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf1f8;</TextStyled>)

}
export const Date = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf133;</TextStyled>)

}
export const Activity = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F' }} >&#xf017;</TextStyled>)
}
export const BookOpen = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F' }} >&#xf518;</TextStyled>)
}
export const LightFlash = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size ? size : 22 }} >&#xf0e7;</TextStyled>)

}
export const Checked = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size ? size : 14, fontWeight: 'bold' }} >&#xf00c;</TextStyled>)
}
export const Pen = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size ? size : 14, fontWeight: 'bold' }} >&#xf304;</TextStyled>)
}
export const Switch = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size ? size : 14, fontWeight: 'bold' }} >&#xf021;</TextStyled>)
}
export const MapDirect = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size ? size : 14, fontWeight: 'bold' }} >&#xf14e;</TextStyled>)

}
export const AddFriend = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf133;</TextStyled>)
}
export const Knowledge = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf549;</TextStyled>)
}
export const Learning = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf501;</TextStyled>)
}
export const Network = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf0c0;</TextStyled>)
}
export const Image = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf03e;</TextStyled>)
}
export const Video = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf008;</TextStyled>)

}
export const Messge = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf075;</TextStyled>)
}
export const MoreOption = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf08e;</TextStyled>)

}
export const GroupSetting = (props: UIProps) => {
    const { color, size } = props;
    return (<TextLaStyled style={{ color: color ? color : '#31383F', fontSize: size }} > &#xf141;</TextLaStyled>)



}
export const Forum = (props: UIProps) => {

    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf500;</TextStyled>)
}
export const Post = (props: UIProps) => {

    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf500;</TextStyled>)
}
export const Dashboard = (props: UIProps) => {

    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf3fd;</TextStyled>)
}
export const Contact = (props: UIProps) => {

    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >&#xf3fd;</TextStyled>)
}
export const Dynamic = (props: UIProps) => {

    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#31383F', fontSize: size }} >{props.hex}</TextStyled>)
}
export const Like = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#FFFFFF', fontSize: size ? size : 16 }} >&#xf004;</TextStyled>)
}
export const Ellipsis = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#FFFFFF', fontSize: size ? size : 16 }} >&#xf142;</TextStyled>)
}
export const Synchronize = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#000', fontSize: size ? size : 16 }} >&#xf021;</TextStyled>)
}
export const Dropdown = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#0000007F', fontSize: size ? size : 16 }} >&#xf0dd;</TextStyled>)
}
export const Setup = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#0000007F', fontSize: size ? size : 16 }} >&#xf013;</TextStyled>)
}
export const EditProfile = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : '#0000007F', fontSize: size ? size : 16 }} >&#xf044;</TextStyled>)
}
export const Star = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf005;</TextStyled>)

}
export const PlusCircle = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf055;</TextStyled>)

}
export const Link = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf0c1;</TextStyled>)
}
export const CaretRight = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }} >&#xf0da;</TextStyled>)
}
export const Replay = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf0e2;</TextStyled>)
}
export const Pin = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf08d;</TextStyled>)
}
export const Share = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf064;</TextStyled>)
}
export const Leave = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf061;</TextStyled>)
}
export const Left = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf060;</TextStyled>)
}
export const ThreeDot = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf142;</TextStyled>)
}
export const NextAudio = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf051;</TextStyled>)
}
export const PreAudio = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf048;</TextStyled>)
}
export const Random = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf074;</TextStyled>)
}
export const Heart = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf08a;</TextStyled>)
}
export const ListMusic = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf03b;</TextStyled>)
}
export const Warning = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf12a;</TextStyled>)
}
export const Newspaper = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf1ea;</TextStyled>)
}

export const UpVote = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf077;</TextStyled>)
}

export const DownVote = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf078;</TextStyled>)
}

export const Comment = (props: UIProps) => {
    const { color, size } = props;
    return (<TextStyled style={{ color: color ? color : 'white', fontSize: size }}>&#xf0e5;</TextStyled>)
}