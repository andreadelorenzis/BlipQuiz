import React from 'react'
import { useAuth } from './AuthProvider'

function StudyProvider() {
    const studySettings = useAuth().studySettings;


    return (
        <div>

        </div>
    )
}

export default StudyProvider
