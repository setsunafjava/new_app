import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MailFakeDb } from './mail';
import { ChatFakeDb } from './chat';
import { CalendarFakeDb } from './calendar';
import { TodoFakeDb } from './todo';
import { ProfileFakeDb } from './profile';
import { ContactsFakeDb } from './contacts';
import { InvoiceFakeDb } from './invoice';
import { FileManagerFakeDb } from './file-manager';
import { SearchFakeDb } from './search';
import { IconsFakeDb } from './icons';

export class FuseFakeDbService implements InMemoryDbService
{
    createDb()
    {
        return {
            'mail-mails'           : MailFakeDb.mails,
            'mail-folders'         : MailFakeDb.folders,
            'mail-filters'         : MailFakeDb.filters,
            'mail-labels'          : MailFakeDb.labels,
            'chat-contacts'        : ChatFakeDb.contacts,
            'chat-chats'           : ChatFakeDb.chats,
            'chat-user'            : ChatFakeDb.user,
            'calendar'             : CalendarFakeDb.data,
            'todo-todos'           : TodoFakeDb.todos,
            'todo-filters'         : TodoFakeDb.filters,
            'todo-tags'            : TodoFakeDb.tags,
            'profile-timeline'     : ProfileFakeDb.timeline,
            'profile-photos-videos': ProfileFakeDb.photosVideos,
            'profile-about'        : ProfileFakeDb.about,
            'contacts-contacts'    : ContactsFakeDb.contacts,
            'contacts-user'        : ContactsFakeDb.user,
            'invoice'              : InvoiceFakeDb.invoice,
            'file-manager'         : FileManagerFakeDb.files,
            'search-classic'       : SearchFakeDb.classic,
            'search-table'         : SearchFakeDb.table,
            'icons'                : IconsFakeDb.icons
        };
    }
}
