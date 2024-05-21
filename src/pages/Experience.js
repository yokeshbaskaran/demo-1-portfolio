import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';


function Experience() 
{
  return(
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2016-2018'
        iconStyle={{background: '#cccc1f', color: '#ffff'}}
        icon={<SchoolIcon />}  >

          <h3 className='vertical-timeline-element-title'>SVVB School,Dpi</h3>
          <p>Higher Secondary School</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--education' 
        date='2016-2018'
        iconStyle={{background: '#cccc1f', color: '#ffff'}}
        icon={<SchoolIcon />}  >

          <h3 className='vertical-timeline-element-title'>SVVB School,Dpi</h3>
          <p>Higher Secondary School</p>

        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='2016-2018'
        iconStyle={{background: '#21c2d1', color: '#ffff'}}
        icon={<WorkIcon />}  >

          <h3 className='vertical-timeline-element-title'>SVVB School,Dpi</h3>
          <p>Higher Secondary School</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className='vertical-timeline-element--work' 
        date='2016-2018'
        iconStyle={{background: '#21c2d1', color: '#ffff'}}
        icon={<WorkIcon />}  >

          <h3 className='vertical-timeline-element-title'>SVVB School,Dpi</h3>
          <p>Higher Secondary School</p>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;