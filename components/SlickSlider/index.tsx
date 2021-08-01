import React from 'react';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';
import classNames from 'classnames';
import Svg from '@components/Svg';

type Props = {
  items: [];
};

const arrow = (prev: boolean) =>
  classNames([
    'absolute top-1/2',
    'transform -translate-y-1/2 z-10',
    'w-10 h-10',
    'bg-primary rounded-full',
    'cursor-pointer',
    { '-left-8 -translate-x-1/2': prev, '-right-8 translate-x-1/2': !prev }
  ]);

const arrowSvg = classNames(['w-4 h-6', 'fill-current text-primary group-hover:text-white']);

function NextArrow(props: any) {
  return (
    <span aria-hidden className={arrow(false)} onClick={props.onClick}>
      <Svg className={arrowSvg} name="right-arrow" />
    </span>
  );
}

function PrevArrow(props: any) {
  return (
    <span aria-hidden className={arrow(true)} onClick={props.onClick}>
      <Svg className={arrowSvg} name="left-arrow" />
    </span>
  );
}

const SlickSlider = ({ items }: Props) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    lazyLoad: 'progressive',
    draggable: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',

          dotsClass: 'absolute left-1/2 transform -translate-x-1/2 bottom-0',
          // eslint-disable-next-line react/display-name
          appendDots: (dots: React.ReactNode) => (
            <div>
              <ul className="grid grid-flow-col gap-1 slick-slider__slick-dots">{dots}</ul>
            </div>
          ),
          // eslint-disable-next-line react/display-name
          customPaging: () => {
            return (
              <span className="block w-3 h-2 rounded bg-home-silver hover:bg-primary-orange slick-slider__slick-paging" />
            );
          }
        }
      }
    ]
  };

  return (
    items &&
    items.length && (
      <Slider className="sm:mx-20 md:px-4 pb-8 md:pb-0" {...settings}>
        {items.map((_, index) => (
          <Link key={index} href="/">
            <a className="block px-2 focus:outline-none slick-slider__slide">{index}</a>
          </Link>
        ))}

        <style global>
          {`
            .slick-slider__slick-dots > .slick-active > .slick-slider__slick-paging {
              background-color: #e722ae;
            }
          `}
        </style>
      </Slider>
    )
  );
};

export default SlickSlider;
